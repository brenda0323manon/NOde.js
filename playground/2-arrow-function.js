// const sqaure = function (x) {
//     return x * x
// }


// const square = (x) => {
//     return x * x
// }

// const square = (x) => x * x  ///short hand, arrow function doesnt bind with this.keyword

// console.log(square(3))

const event = {
    name: 'Birthday Party',
    guestList: ['Brenda', 'Lalo', 'Oscar', 'Karen'],
    printGuestList() {///Arrow function does not that take this.method, perferable use regualr functions 
        console.log('Guest list for ' + this.name)
        

        this.guestList.forEach((guest)  => {
            console.log(guest + ' is attending ' + this.name)
        }) 
    }
}

event.printGuestList()

