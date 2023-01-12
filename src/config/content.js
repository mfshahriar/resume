function getAge(dateString) {
  let today = new Date();
  let birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  let m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

const content = {
  autoTypingStrings: [
    "a Machine learning enthusiast",
  ],
  name: "Mohammad Fahim Shahriar",
  age: getAge("1997-1-15"),
  aboutText:
    "I enjoy having fun with what I learn. I am a machine learning enthusiast comfortable with tools such as TensorFlow, OpenCV, Keras, etc. I have also worked with C++, C#, and python. I have completed my Bachelor of Science degree in computer science from American International University Bangladesh. Currently, I am exploring different paradigms of machine learning and data science, and looking for opportunities for a funded graduate degree.",
  phoneNumber: "+8801757501506",
  email: "fahimmfs@gmail.com",
  address: "K-62/A, Kuril Chowrastha, Kuril, Dhaka, Bangladesh.",
  city: "Dhaka, Bangladesh",
  website: "www.blank.com",
  bloodGroup: "O (+ve)",
  freelance: "Unavailable",
};
export default content;
