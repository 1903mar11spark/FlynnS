
public class FizzBuzz {
	
	public void fizzBuzz1() {
		for(int i = 1; i <= 100; i++) {
			if (((i%3) == 0) && ((i%5) == 0)){
				System.out.println("fizzbuzz");
			} else if ((i%3) == 0) {
				System.out.println("fizz");
			} else if ((i%5) == 0) {
				System.out.println("buzz");
			} else {
				System.out.println(i);
			}
		}
		
	}
	public void fizzBuzz2(int m, int n) {
		int k = m-n;
		if(m>n) {
			for(int i = 1; i <= k; i++) {
				if (((i%3) == 0) && ((i%5) == 0)){
					System.out.println("fizzbuzz");
				} else if ((i%3) == 0) {
					System.out.println("fizz");
				} else if ((i%5) == 0) {
					System.out.println("buzz");
				} else {
					System.out.println(i);
				}
				
			}
		}
	}
	public void fizzBuzz3(int m, int n, int fizzNum, int buzzNum) {
		int k = m-n;
		if(m>n) {
			for(int i = 1; i <= k; i++) {
				if (((i%fizzNum) == 0) && ((i%buzzNum) == 0)){
					System.out.println("fizzbuzz");
				} else if ((i%fizzNum) == 0) {
					System.out.println("fizz");
				} else if ((i%buzzNum) == 0) {
					System.out.println("buzz");
				} else {
					System.out.println(i);
				}
				
			}
		
		}
	}
	public void fizzBuzz4(int m, int n, int[] numbers, String[] terms) {
		int k = m-n;
		for (int i = 1; i <= k; i++) {
			if ((i%(numbers[0]) == 0) && ((i%numbers[1]) == 0)){
				System.out.println(terms[0] + terms [1]);
			} else if (i%(numbers[0]) == 0) {
				System.out.println(terms[0]);
			} else if (i%(numbers[1]) == 0) {
				System.out.println(terms[1]);
			} else {
				System.out.println(i);
			}
		}
	}

}
