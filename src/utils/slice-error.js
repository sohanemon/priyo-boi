const sliceFirebaseError = ({ message }) => {
  const step1 = message.split("/");
  const step2 = step1[1].split(")");
  const step3 = step2[0].replaceAll("-", " ");
  return "Oops! " + step3 + ".";
};
export default sliceFirebaseError;
