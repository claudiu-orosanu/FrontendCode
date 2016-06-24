/**
 * Created by user on 6/23/2016.
 */
var employeesList = [
    {
        firstName: 'John',
        lastName: 'King',
        phone: '1283482739',
        salary: 4500
    },
    {
        firstName: 'Steven',
        lastName: 'Gerard',
        phone: '0273018293',
        salary: 4500
    },
    {
        firstName: 'Diana',
        lastName: 'Ross',
        phone: '3840182083',
        salary: 4500
    },
    {
        firstName: 'Mike',
        lastName: 'Bob',
        phone: '3748722125',
        salary: 4500
    },
    {
        firstName: 'Emily',
        lastName: 'Hudson',
        phone: '1927823921',
        salary: 4500
    }
];

    function showList() {
        var myTable = '<table border="1" class="table table-condensed"><tr><th>First Name</th><th>LastName</th><th>Phone</th><th>Salary</th></tr>';

        for (var i in employeesList) {
            myTable += '<tr><td>' + employeesList[i].firstName + '</td><td>' + employeesList[i].lastName + '</td><td>' + employeesList[i].phone +
                '</td><td>' + employeesList[i].salary + '</td> +' +
                '<td> <button id= "vizButton" onclick="showItem()">Viz</button></td>' +
                '<td><button id="delButton" onclick="deleteItem()">Remove</button> </td>'+
                '</tr>';
        }

        //---------------coloana a 2 a, afiseaza numarul de lastname unice------------------
        var lastNameList = new Array();
        for (var i in employeesList){
            lastNameList.push(employeesList[i].lastName);
        }
        var countLastName = 0;
        for(var i in lastNameList){
            var unique = true;
            for(var j in lastNameList){
                if (lastNameList[i] == lastNameList[j] && i!=j)
                    unique = false;
            }
            if(unique == true)
                countLastName++;
        }
        //---------------------------------------------------------

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
        //alert('maxPhone =' + maxPhone);
        //---------------------------------------------------------


        myTable += '<tr><td>s</td><td>' +countLastName +'</td><td>'+
            maxPhone[0]+','+maxPhone[1]+','+
            maxPhone[2]+ ',' + maxPhone[3]+ ',' +maxPhone[4]+
            '</td></tr>';

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

    function showItem(){
    }