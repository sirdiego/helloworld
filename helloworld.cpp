#include <iostream>

void ascii(int max)
{
	char numbers[max];
	for(int i = 0; i < max; i++) {
		numbers[i] = (char) (i+48);
	}
	for(int	i = 0; i < max; i++) {
		std::cout << numbers[i];
		if((i+1)%10 == 0) {
			std::cout << std::endl;	
		}
	}

}

int main(void)
{
	int max = 1;
	std::cout << "Generate ASCII Table" << std::endl;
	while(max) {
		std::cout << "Max (0 to quit): ";
		std::cin >> max;
		ascii(max);
	}
	std::cout << std::endl << "Bye bye!" << std::endl;
}
