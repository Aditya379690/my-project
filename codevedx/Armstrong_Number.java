import java.util.Scanner;

public class Armstrong_Number
{
    private static Scanner sc;

     // Method to check whether a number is an Armstrong number
    public static boolean isArmstrong(int number) {

        int temp ,reminder ,times=0;
        int  sum=0;

        // Store the original number because 'temp' will be modified
        temp= number;

        // Count the number of digits
        while(temp!=0){
            times = times + 1;
            temp = temp/10;
        }

        // Special case for 0 (0 is an Armstrong number)
        if (number == 0) {
            times = 1;
        }

         // Reset temp for calculation
        temp = number;

        // Calculate the sum of each digit raised to the power of total digits
        while(temp>0){
            reminder = temp%10;
            sum += (int)Math.pow(reminder,times);
            temp = temp/10;
        }

        // Display the calculated sum
        System.out.printf("Sum of entered is = %d%n", sum);

         // Return true if the number is Armstrong
        return sum == number;
        }

        
        public static void main(String[] args) {

        int number;

        sc = new Scanner(System.in);

        // Ask the user to enter a number
        System.out.print("Enter a positive integer to check Armstrong Number: ");

        // Input validation: Check whether the input is an integer
        if (!sc.hasNextInt()) {
            System.out.println("Invalid Input! Please enter a valid integer.");
            sc.close();
            return;
        }

        number = sc.nextInt();

        // Input validation: Check for non-negative number
        if (number < 0) {
            System.out.println("Please enter a positive integer.");
            sc.close();
            return;
        }

        // Call the method to check Armstrong number
        if (isArmstrong(number)) {
            System.out.println(number + " is an Armstrong Number.");
        } else {
            System.out.println(number + " is NOT an Armstrong Number.");
        }

        // Close the scanner
        sc.close();
    }
}