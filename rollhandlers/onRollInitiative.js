const token = data?.token;
const tokenName = token.name || token.record?.name;

const initiativeSkill = token.data?.initiativeSkill || "Perception";

rollSkill(
  token,
  initiativeSkill.toLowerCase(),
  null,
  false,
  0,
  1,
  "int",
  true,
  true
);
