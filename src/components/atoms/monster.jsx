export const Monster = (props) => {
  const { IconName, monid } = props;

  return (
    <div>
      <img
        className={`${monid}`}
        src={`${process.env.PUBLIC_URL}/images/${IconName}.png`}
        alt={IconName}
      />
    </div>
  );
};
