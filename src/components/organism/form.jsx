export const Form = () => {
  return (
    <>
      <form
        className="form"
        action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdt6gax_puckd-7PPtVrEsxYiG3iLsMC-KS14pFr2zBRDuekg/formResponse"
      >
        <label for="form-name">お名前</label>
        <p>
          <input
            className="inputarea"
            id="form-name"
            type="text"
            name="entry.2017160994"
            placeholder="名前"
            required=""
          />
        </p>

        <label for="form-mail">メールアドレス</label>
        <p>
          <input
            className="inputarea"
            id="form-mail"
            type="email"
            name="entry.1782306178"
            placeholder="example@mail.co.jp"
            required=""
          />
        </p>

        <label for="form-detail">お問い合わせ詳細</label>
        <p>
          <textarea
            className="inputarea"
            id="form-detail"
            name="entry.1363619119"
            placeholder="ご自由にご記載下さい。"
            required=""
          ></textarea>
        </p>

        <p>
          <button type="submit" name="button" value="送信する">
            送信する
          </button>
        </p>
      </form>
      <a className="SNS" href="#">
        <img
          width="60px"
          src={`${process.env.PUBLIC_URL}/images/twitter.png`}
          alt="ツイッターアイコン"
        />
      </a>
      <a className="SNS" href="#">
        <img
          width="50px"
          src={`${process.env.PUBLIC_URL}/images/insta.png`}
          alt="インスタグラムアイコン"
        />
      </a>
    </>
  );
};
