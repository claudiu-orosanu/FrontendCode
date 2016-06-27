/**
 * Created by Claudiu on 6/27/2016.
 */
hrApp.service('userService',function() {
    return {
        userList: [
            {
                firstname: "Jack",
                lastname: "Livingston",
                id: 92,
                age: 22
            },
            {
                firstname: "Charles",
                lastname: "Johnson",
                id: 112,
                age: 33
            },
            {
                firstname: "Jean",
                lastname: "Fleaur",
                id: 292,
                age: 19
            },
            {
                firstname: "Anthony",
                lastname: "Cabrio",
                id: 102,
                age: 23
            }
        ],
        addUser: function (user) {
            userList.push(user);
        }
    }
});