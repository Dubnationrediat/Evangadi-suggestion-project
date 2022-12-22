let fromStudent =`CREATE TABLE if not exists studentInfo(
    question int auto_increment,
    forwarded_from varchar(255) not null,
    phase varchar(255) not null,
    title_of_the_course varchar(255) not null,
    correction_is_on varchar(255) not null,
    note_on_correction varchar(255) not null,
    screenshot2 longblob ,
    PRIMARY KEY (question)
    )`

    export default fromStudent