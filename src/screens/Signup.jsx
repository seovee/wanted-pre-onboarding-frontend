function Signup() {
  return (
    <>
      <h1>Sign Up</h1>
      <form>
        <input
          type="email"
          aria-label="이메일"
          name="email"
          placeholder="email@naver.com을 입력해 주세요."
        />
        <input
          type="password"
          aria-label="비밀번호"
          name="password"
          placeholder="비밀번호를 입력해주세요"
        />
        {true ? <button>회원가입</button> : <button disabled>회원가입</button>}
      </form>
    </>
  );
}

export default Signup;
