myOutput: MainCl.o Statement.o 
	g++ MainCl.o Statement.o -o myOutput

MainCl.o: MainCl.cpp
	g++ -c MainCl.cpp

Statement.o: Statement.cpp
	g++ -c Statement.cpp

clean:
	rm *.o myOutput