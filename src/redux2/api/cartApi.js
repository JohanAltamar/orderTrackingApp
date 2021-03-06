import { db, firebase } from "../../services/firebase";

export const placeOrderCartApi = async (payload) => {
  let dbRef = db.collection("orders");
  const res = await dbRef.add({
    ...payload,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  });
  return res.id;
};
