/**
 * Created by user on 6/23/2016.
 */
var employeesList = [
    {
        firstName: 'John',
        lastName: 'King',
        phone: '1283482739',
        salary: 4555
    },
    {
        firstName: 'Steven',
        lastName: 'Gerard',
        phone: '0273018293',
        salary: 2566
    },
    {
        firstName: 'Diana',
        lastName: 'Ross',
        phone: '3840182083',
        salary: 9650
    },
    {
        firstName: 'Mike',
        lastName: 'Bob',
        phone: '3748722125',
        salary: 7450
    },
    {
        firstName: 'Emily',
        lastName: 'Hudson',
        phone: '1927823921',
        salary: 12660
    },
    {
        firstName: 'John',
        lastName: 'Hudson',
        phone: '1927823921',
        salary: 15440
    }
];

    function showList() {
        var myTable = '<table border="1" class="table table-condensed"><thead><tr><th>First Name</th>'+
            '<th>LastName</th><th>Phone</th><th>Salary</th><th>View</th><th>Remove</th></thead></tr>';

        for (var i in employeesList) {
            myTable += '<tr id="'+i+'"><td>' + employeesList[i].firstName + '</td><td>' + employeesList[i].lastName + '</td><td>' + employeesList[i].phone +
                '</td><td>' + employeesList[i].salary + '</td>' +
                '<td> <button onclick="showItem('+i+')">View</button></td>' +
                '<td><button onclick="deleteItem('+i+')">Remove</button> </td>'+
                '</tr>';
        }

        myTable += '<tr style="border-top: groove"><td>'+firstNameFreq()+'</td><td>' + uniqueLastNameCount() +'</td><td>'+
            phoneInfo() + '</td><td>' + avgSalary() + '</td></tr>';

        myTable += '</table>';
        var container = document.getElementById('listcontainer');
        container.innerHTML = myTable;
    }

    var Employee = function (firstName, lastName, phone, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.salary = salary;
    }
    function addEmployee() {
        var firstName = document.getElementById("firstName").value;
        var lastName = document.getElementById("lastName").value;
        var phone = document.getElementById("phone").value;
        var salary = parseInt(document.getElementById("salary").value);
        employeesList.push(new Employee(firstName, lastName, phone, salary));
        showList();
    }

    function sumSalary() {
        var sum=0;
        for (var i in employeesList) {
            sum += employeesList[i].salary;
        }
        document.getElementById("sum").value = sum;
    }
    function deleteLast() {
        employeesList.pop();
        showList();
    }
    function showItem(row){
        alert(employeesList[row].firstName +" "+ employeesList[row].lastName+" "+
        employeesList[row].phone+" "+employeesList[row].salary);
    }
    function deleteItem(row) {
        employeesList.splice(row,1);
        showList();
    }
    function firstNameFreq() {
        var firstNames = new Array();
        for(var i in employeesList)
            firstNames.push(employeesList[i].firstName);
        var nameHashMap = [{name:firstNames[0], freq:1}];
        for(var i=1; i<firstNames.length;i++){
            var contains = false;
            for(var j in nameHashMap){
                if(nameHashMap[j].name == firstNames[i])
                    contains = true;
            }
            if(contains == true) {
                for(var j in nameHashMap)
                    if(nameHashMap[j].name == firstNames[i])
                        nameHashMap[j].freq++;
            }
            else
                nameHashMap.push({name:firstNames[i],freq:1});
        }

        /*var ss="";
        for(var i in nameHashMap)
            ss += nameHashMap[i].name + nameHashMap[i].freq +" ";
        return ss;*/

        var maxim = nameHashMap[0].freq;
        var maxIndex = 0;
        for(var i in nameHashMap){
            if(nameHashMap[i].freq > maxim) {
                maxim = nameHashMap[i].freq;
                maxIndex = i;
            }

        }
        return  nameHashMap[maxIndex].name;
    }
    function uniqueLastNameCount(){
        //---------------coloana a 2 a, afiseaza numarul de lastname unice------------------
        var lastNameList = new Array();
        for (var i in employeesList){
            lastNameList.push(employeesList[i].lastName);
        }
        var lastNameFreq = [{name: lastNameList[0], freq:1}];
        for(var i=1; i < lastNameList.length; i++){
            var contains = false;
            for(var j in lastNameFreq) {
                if (lastNameFreq[j].name == lastNameList[i])
                    contains = true;
            }
            if(contains == true){
                for(var j in lastNameFreq)
                    if(lastNameFreq[j].name == lastNameList[i])
                        lastNameFreq[j].freq++;
            }
            else
                lastNameFreq.push({name:lastNameList[i],freq:1});
        }

        /*var ss = "";
        for(var i in lastNameFreq)
            ss+= lastNameFreq[i].name + lastNameFreq[i].freq +" ";
        return ss;*/
        var count = 0;
        for(var i in lastNameFreq)
            count ++;
        return count;
    }
    function phoneInfo(){
        //-------------coloana a 3 a, sa se afiseze primele 5 cifre care apar cel mai des-------------
        var phoneList = new Array();
        for(var i in employeesList)
            phoneList.push(employeesList[i].phone);
        var phoneFreq = new Array(10);
        phoneFreq.fill(0);
        for(var i in phoneList){
            for(var j = 0; j<phoneList[i].length; j++){
                var cif = (phoneList[i])[j];
                phoneFreq[cif] ++;
            }
        }
        //alert('phoneFreq =' + phoneFreq);
        var maxPhone = new Array();
        for(var k=0; k<5; k++) {
            var max = phoneFreq[0];
            var index =0;
            for (var i in phoneFreq) {
                if (phoneFreq[i] > max) {
                    max = phoneFreq[i];
                    index = i;
                }
            }
            phoneFreq[index] = 0;
            maxPhone.push(index);
        }
        return maxPhone[0]+','+maxPhone[1]+','+
            maxPhone[2]+ ',' + maxPhone[3]+ ',' +maxPhone[4];
    }
    function avgSalary() {
        var sum = 0;
        for (var i in employeesList)
            sum += employeesList[i].salary;
        return Number(sum/(Number(i)+1)).toFixed(2);
    }
    function sortEmployees() {
        var val = parseInt(document.getElementById("sortBy").value);
        switch (val){
            case 1:
                employeesList.sort(function (a,b) {
                    if(a.firstName !== b.firstName){
                        if(a.firstName > b.firstName)
                            return 1;
                        else
                            return -1;
                    }
                    else{
                        if(a.lastName >= b.lastName)
                            return 1;
                        else return 0;
                    }
                });
                showList();
                break;
            case 2:
                employeesList.sort(function(a,b){
                    if(a.lastName !== b.lastName){
                        if(a.lastName > b.lastName)
                            return 1;
                        else
                            return -1;
                    }
                    else{
                        if(a.firstName >= b.firstName)
                            return 1;
                        else return 0;
                    }
                });
                showList();
                break;
            case 3:
                employeesList.sort(function (a,b) {
                    if(a.phone !== b.phone){
                        if(a.phone > b.phone)
                            return 1;
                        else
                            return -1;
                    }
                    else{
                        if(a.lastName >= b.lastName)
                            return 1;
                        else return 0;
                    }
                });
                showList();
                break;
            case 4:
                employeesList.sort(function (a,b) {
                    if(a.salary !== b.salary){
                        if(a.salary > b.salary)
                            return 1;
                        else
                            return -1;
                    }
                    else{
                        if(a.lastName >= b.lastName)
                            return 1;
                        else return 0;
                    }
                });
                showList();
                break;
            default:
                alert("Alegeti o cifra dintre: 1,2,3,4");
        }
    }
    function filterEmployees() {
        var filter = document.getElementById("filter").value;
        var rows = new Array();
        for(var i in employeesList){
            if(employeesList[i].firstName == filter || employeesList[i].lastName == filter ||
                employeesList[i].phone == filter || employeesList[i].salary == filter)
                rows.push(i);
        }
        var aux = new Array();
        /*for(var i in rows)
            aux.push(employeesList[rows[i]]);
        employeesList = aux;
        showList();
        */
        for(var i in employeesList) {
            var found = false;
            for (var j in rows) {
                if(i == rows[j])
                    found = true;
            }
            if (found == false)
                document.getElementById(i).style.display = 'none';
        }
        alert('ok');
        for(var i in employeesList)
            document.getElementById(i).style.display = 'block';

    }