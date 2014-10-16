class myString{
private:
    char *m_Str; // указатель на строку с нулём на коце
    int L; // указатель на размер строки
    void New( const char *str ); // выделение памяти
    void Del(); // удаление памяти

public:
    myString(); // конструктор по умолчанию
    explicit myString(const myString &str); // конструктор копирования
    myString( const char * str ); // дополнительный конструктор
    ~myString();
    void Set();
    void Print();
    void ofile(char *str);
    myString & operator=( const myString & str );
};
