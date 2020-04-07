const human = {
    firstName : 'Hartono',
    lastName : 'Gokil',
    // getFullName function(){
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    },

    changeName(namaYangDiubah){
        this.firstName = namaYangDiubah;    
    },

    setAnak(...args){
        let anakArray = [];
        for (let anak of args){
            anakArray.push(anak);
        }
        this.anak = anakArray;
    },
    getAnak(){
        return this.anak;
    }
}
console.log(human.getFullName());

let fullName = human.getFullName();
console.log(fullName);

human.changeName('Budi');
fullName = human.getFullName();
console.log(fullName);



// Date Function
const date = new Date();

const tanggal = `${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()}`;
console.log(`tanggal hari ini adalah ${tanggal}`);


//  Rest Parameters (...)
human.getAnak();
human.setAnak('Bobi', 'Budi');

console.log(human.getAnak());


// Destructure

/*
const firstName = human.firstName;
const lastName = human.lastName;
*/
const { firstName, lastName} = human;
console.log(`${firstName} ${lastName}`);


// Learn DOM event Listener
document.querySelector('#clickme').addEventListener('click',(event) => {
    const stringHTML = '<button class = "btn btn-danger">Awas</button>';
    document.getElementById('content').innerHTML = stringHTML
    window.alert('saya terklik')
});