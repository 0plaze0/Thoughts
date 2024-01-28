const logout = (req, res) => {
  return res.status(200).cookie("access-token", "").json("ok");
};
export default { logout };
