export const ProfileImage = () => {
  const reset = { margin: 0 };

  return (
    <>
      <div className="namewithimage">
        <img
          width="230px"
          className="profileimage"
          src={`${process.env.PUBLIC_URL}/images/myicon.jpg`}
          alt="プロフィール画像"
        />
        <p className="shunD" style={reset}>
          しゅんでぃー
        </p>
      </div>
    </>
  );
};
