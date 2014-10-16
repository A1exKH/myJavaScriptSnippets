#pragma once /* Защита от двойного подключения заголовочного файла */
class myString{

    //variables
    char *str;
    char *str_return;

    public:

    ~myString();
    myString();
    void Set();
    void print(myString&);
    char* run(myString&);
    void ofile(char *str, myString& object);

   // myString & operator=(const char *str );

    char* New( char *str );

};

