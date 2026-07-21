import java.util.Scanner;

public class Employee { 

    //Encapsulation
    private int id;
    private String name;
    private String department;
    private double salary;

    Scanner sc = new Scanner(System.in); 

    //Getters and Setters
    public int getId() {
    return id;
    }
    public void setId(int id){
        this.id=id;
    }

    public String getName(){
    return name;
    }

    public void setName(String name){
        this.name=name;
    }
    public String getDepartment(){
        return department;
    }

    public void setDepartment(String department){
        this.department=department;
    }
    public double getSalary(){
        return salary;
    }
    
    public void setSalary(double salary){
        this.salary=salary;
    }

    // Method Overloading - Method 1
    public void inputDetails() {
        System.out.print("Enter Employee ID: ");
        id = sc.nextInt();

        sc.nextLine();

        System.out.print("Enter Employee Name: ");
        name = sc.nextLine();

        System.out.print("Enter Department: ");
        department = sc.nextLine();

        System.out.print("Enter Monthly Salary: ");
        salary = sc.nextDouble();
    }

    // Method Overloading - Method 2
     public void inputDetails(int id, String name, String department, double salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    // Calculate Annual Salary
    public double calculateAnnualSalary() {
        return salary * 12;
    }

    //Display Details
    public void displayDetails() {
    System.out.println("\n=========================================================================================================");
    System.out.println("                             EMPLOYEE DETAILS");
    System.out.println("=========================================================================================================");

    System.out.printf("%-10s %-20s %-20s %-15s %-15s%n",
            "ID", "NAME", "DEPARTMENT", "SALARY", "ANNUAL SALARY");

    System.out.println("---------------------------------------------------------------------------------------------------------");

    System.out.printf("%-10d %-20s %-20s %-15.2f %-15.2f%n",
            getId(), 
            getName(), 
            getDepartment(), 
            getSalary(), 
            calculateAnnualSalary());

    System.out.println("=========================================================================================================");
}

//Override toString()
@Override
    public String toString() {
        return "Employee ID       : " + getId() +
           "\nEmployee Name     : " + getName() +
           "\nDepartment        : " + getDepartment() +
           "\nMonthly Salary    : " + getSalary() +
           "\nAnnual Salary     : " + calculateAnnualSalary();
    }
    public static void main(String[] args) {
    Employee employee1 = new Employee();

        // Uses overloaded Method 1
        employee1.inputDetails();

        employee1.displayDetails();

        System.out.println(employee1);
    }
} 

