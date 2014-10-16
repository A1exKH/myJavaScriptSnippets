#pragma once /* Защита от двойного подключения заголовочного файла */
class myEquation{

    //variables
    private:
    double x, y, z, h;

    friend void print(myEquation&);

    friend void run(myEquation&);

    public:

    ~myEquation();

    myEquation(double, double, double, double);

};

