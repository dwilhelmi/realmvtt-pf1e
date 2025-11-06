const token =
  data?.tokens && data?.tokens.length > 0 ? data?.tokens[0] : undefined;

if (token) {
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
    true,
    (data?.tokens || []).map((token) => token?._id),
    {
      initiativeSkill: initiativeSkill,
    }
  );
}
