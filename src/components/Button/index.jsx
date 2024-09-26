import ButtonItem from "./buttonitem";

const ButtonContainer = ({ buttons }) => (
    <>
      {buttons.map((button) => (
        <ButtonItem button={button} key={button.label} /> // Using ButtonItem with capital 'I'
      ))}
  
    </>
  );
  
  // Export ButtonContainer
  export default ButtonContainer;