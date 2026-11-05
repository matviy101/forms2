import { InfoContainer, InfoText } from './Info.styled';

const Info = ({ total, completed }) => {
  return (
    <InfoContainer>
      <InfoText>
        всього завдвнь: <strong>{total}</strong>
      </InfoText>

      <InfoText>
        завершанні завдвння: <strong>{completed}</strong>
      </InfoText>
    </InfoContainer>
  );
};

export default Info;