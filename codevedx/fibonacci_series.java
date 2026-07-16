import java.util.Scanner;
public class fibonacci_series{
    private static Scanner sc;
    public static void main(String[] args){
        int number,i;
        sc = new Scanner(System.in);

        // Ask the user to enter the number of terms
        System.out.print("Enter the no. of values what to print in series:");
        
        // Input validation: Check if the entered value is an integer
        if (!sc.hasNextInt()) {
            System.out.println("Invalid input! Please enter a valid integer.");
            return;
        }

        number = sc.nextInt();

        // Input validation: Check if the number is non-negative
        if (number < 0) {
            System.out.println("Please enter a non-negative integer.");
            return;
        }

        // Print the Fibonacci series
        System.out.print("Fibonacci Series:");

        for(i=0;i<number;i++){
            System.out.print(fns(i)+" ");
        }
    }
     // Method to return the Fibonacci number at a given position
    public static int fns(int number)
    {

        // Base case: First Fibonacci number
        if(number == 0)
            return 0;

         // Base case: Second Fibonacci number
        else if(number == 1)
            return 1;

        // Recursive case: Sum of the previous two Fibonacci numbers
        else
            return (fns(number-2)+fns(number-1));
    }
}
