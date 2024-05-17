import buttonsData from '@/constants/buttons';
import Button from './Button';

const ButtonsList = () => {
  return (
    <div className="flex w-full gap-2 flex-wrap">
      {buttonsData.map((button, index) => (
        <Button
          key={index}
          imgSrc={button.imgSrc}
          text={button.text}
          hoverColor={button.hoverColor}
        />
      ))}
    </div>
  );
};

export default ButtonsList;
