let userInfo =`CREATE TABLE if not exists userInfo(
    userInfo_ID int auto_increment,
    user_name varchar(255) not null,
    email varchar(255) not null,
    password varchar(255) not null,
    PRIMARY KEY (userInfo_ID)
    )`

    export default userInfo;