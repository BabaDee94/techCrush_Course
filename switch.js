//SWITCH 

let day = "Monday";

switch (day) {
    case "Monday":   console.log("New week, fresh start!");   break;
    case "Friday":   console.log("Almost the weekend!");   break;
    case "Saturday":                                                    //N.B WHAT HAPPENED BTW SATURDAY AND FRIDAY IS CALLED "FALL THROUGH CASES" I.E SATURDAY AND SUNDAY WITH PRINT THE SAME RESULT.
    case "Sunday":   console.log("It is the weekend! Rest up.");   break;
    default:   console.log("Keep going, midweek grind!");
}