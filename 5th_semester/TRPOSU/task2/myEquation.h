#pragma once /* Защита от двойного подключения заголовочного файла */
class myEquation{

    //variables

    double x, y, z, h;

    public:

    myEquation();

    void set(double, double, double, double);

    void print();

    void run();

};

