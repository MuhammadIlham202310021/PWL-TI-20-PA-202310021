import React from "react";

export default function statement() {
  const objData = {
    id: 1,
    name: "Muhammad Ilham",
    gender: "M",
    birthdate: "2003-0-25",
    address: "Jampang Parung gg.bersama, kab Bogor",
    favorite: ["Eat", "Sleep", "Gaming"],
    activity: [
      {
        type: "work",
        place: "Ibik campus",
        start_time: "07:00",
        end_time: "17:00",
      },
      {
        type: "sleep",
        place: "My house",
        start_time: "22:00",
        end_time: "04:00",
      },
      {
        type: "Breakfast",
        place: "Cafe",
        start_time: "06:00",
        end_time: "07:00",
      },
    ],
  };
  const age = calculateAge(objData.birthdate);
  const level = levelAge(age);
  return (
    <di>
      <p>Name: {objData.name}</p>
      <p>Gender: {objData.gender === "M" ? "Male" : "Female"}</p>
      <p>Birtdate: {objData.birthdate}</p>
      <p>Lavel: {level}</p>
      <p>Address: {objDate.address}</p>
      <p>Favorite: </p>
      <ol>
        {objData.favorite.map((v, index) => (
          <li key={index}>{v}</li>
        ))}
      </ol>
      <p>Activity</p>
      <MyActivity data={objData.activity} />
    </di>
  );
}

const calculateAge = (birthdate) => {
  var today = new Date();
  var birthdate = new Date(birthdate);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthdate.getMonth();
  if (m < 0 || (M === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

const levelAge = (age) => {
  let level = "";
  switch (true) {
    case age < 10:
      level = "TODDLER";
      break;
    case age > 10 && age < 17:
      level = "TENAGER";
      break;
    case age > 17 && age < 30:
      level = "Younger";
      break;
    case age > 30 && age < 50:
      level = "OLDER";
      break;
    case age > 50 && age < 80:
      level = "TODDLER";
      break;
    case age > 80 && age < 100:
      level = "LEGEND";
      break;
  }

  return level;
};

const MyActivity = ({ data }) => {
  return (
    <table border={1}>
      <thead>
        <tr>
          <th>No</th>
          <th>Type</th>
          <th>Place</th>
          <th>Tern</th>
        </tr>
      </thead>
      <tbody>
        {Object.values(data).length > 0 ? (
          data.map((v, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{v.type}</td>
              <td>{v.place}</td>
              <td>
                {v.start_time} until {v.end_time}
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colspan="4">No activity found</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
