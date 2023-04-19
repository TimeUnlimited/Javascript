import java.util.Random;
import java.util.Scanner;

public class simplecalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Random random = new Random();
        int randomnumber = random.nextInt(100) + 1;

        boolean gameRunning = true;
        int attempts = 0;

        while (gameRunning) {
            System.out.println("Guess the random number It will be 1-100! or type exit to quit");
            String userInput = scanner.nextLine();

            if (userInput.equalsIgnoreCase("quit")) {
                gameRunning = false;
            } else {
                try {
                    int userguess = Integer.parseInt(userInput);
                    attempts++;

                    if (userguess == randomnumber) {
                        System.out.println("Congrats you guessed the number!");
                        System.out.println("You guessed the number in " + attempts + " attempts.");
                        gameRunning = false;
                    } else if (userguess > randomnumber) {
                        System.out.println("Your guess is too high!");
                    } else {
                        System.out.println("Your guess is too low!");
                    }
                } catch (NumberFormatException e) {
                    System.out.println("Invalid input. Please enter a number or type 'quit' to exit.");
                }
            }
        }

        scanner.close();
    }
}
