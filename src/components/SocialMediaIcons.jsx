const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-10 mx-4">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/saili-manchkar-5b5932174/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com/saili_manchkar/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src="../assets/instagram.png" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
