import React from "react";
import Contacts from "../contacts.js";

console.log(Contacts[0].name);

const name = {
  Beyonce: 0,
  Jack: 1,
  Chuck: 2
};

console.log(name.Beyonce);

function Contcard(Prop) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{Prop.name}</h2>
          <img
            className="card-img"
            className="circle-img"
            src={Prop.imgURL}
            alt="avatar_img"
          />
        </div>
        <div className="bottom">
          <p>{Prop.phone}</p>
          <p>{Prop.email}</p>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Contcard
        name={Contacts[name.Beyonce].name}
        imgURL={Contacts[name.Beyonce].imgURL}
        phone={Contacts[name.Beyonce].phone}
        email={Contacts[name.Beyonce].email}
      />

      <Contcard
        name={Contacts[name.Jack].name}
        imgURL={Contacts[name.Jack].imgURL}
        phone={Contacts[name.Jack].phone}
        email={Contacts[name.Jack].email}
      />

      <Contcard
        name={Contacts[name.Chuck].name}
        imgURL={Contacts[name.Chuck].imgURL}
        phone={Contacts[name.Chuck].phone}
        email={Contacts[name.Chuck].email}
      />
    </div>
  );
}

export default App;
