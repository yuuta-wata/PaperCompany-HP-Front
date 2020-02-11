import React from 'react';

export function Contact() {
  return (
    <div className="wrapper">
      <div className="content">
        <div className="box">
          <h2>Contact</h2>
          <p>必要事項を入力してください。(実際には送信できません。)</p>
          <form>
            <p>
              <label>
                お名前
                <br />
                <input type="text" autoFocus />
              </label>
            </p>
            <p>
              <label>
                メールアドレス
                <br />
                <input type="email" />
              </label>
            </p>
            <p>
              <label>
                お問い合わせ内容
                <br />
                <textarea placeholder="具体的にお書き下さい。"></textarea>
              </label>
            </p>
            <p>
              <input type="submit" value="送信" />
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
