

const main = (): void => {
    //helloWorld()
    greetings("Gabriel")
}

let helloWorld = (): void => {
    console.log('hello World');
}

let greetings = (user: string): void => {
    // Greets the user(param)
    console.log(`hello ${user}`);
}


main()