// Question 44: Sandwiches: Summarize sandwich orders with varying ingredients.


function make_sandwich(...items: string[]) {
    console.log(`Making a sandwich with: ${items.join(', ')}.`);
}

make_sandwich("Tomato", "Cheese");
make_sandwich("Turkey", "Mayo", "Tomato");
make_sandwich("Avocado", "Sprouts", "Mustard", "Mayo");