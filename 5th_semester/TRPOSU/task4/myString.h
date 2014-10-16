#pragma once /* Защита от двойного подключения заголовочного файла */
class myString{

    //variables
    char *str;
    char *str_return;

    private:

    friend void print(myString&);

    friend char* run(myString&);

    public:

    ~myString();

    myString();

    void Set(char*);

};

