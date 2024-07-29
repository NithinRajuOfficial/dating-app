const navbarData = [
  { name: "Profile", link: "/profile" },
  { name: "Matches", link: "/matches" },
  { name: "Messages", link: "/messages" },
  { name: "Settings", link: "/settings" },
  { name: "Signup", link: "/signup" },
];

const signupInputData = [
  { name: "userName", type: "text", label: "Username" },
  { name: "email", type: "email", label: "Email" },
  { name: "contactNumber", type: "text", label: "Contact Number" },
  { name: "password", type: "password", label: "Password" },
];

const loginInputData = [
  { name: "email", type: "email", label: "Email" },
  { name: "password", type: "password", label: "Password" },
];

const userDataDialogInputSetOne = [
  { name: "dateOfBirth", type: "date", label: "DOB" },
];


const userDataDialogInputSetTwo = [
  { name: "proImg", type: "file", label: "Profile Image" },
  { name: "shortReel", type: "file", label: "Short Reel" },
];

export {
  navbarData,
  signupInputData,
  loginInputData,
  userDataDialogInputSetOne,
  userDataDialogInputSetTwo,
};
