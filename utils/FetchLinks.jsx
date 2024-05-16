import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

export const FetchLinks = async (userId) => {
  const q = query(collection(db, `Profile/${userId}/ProfileLinks`));
  const querySnapShot = await getDocs(q);

  const orders = [];

  querySnapShot.forEach((doc) => {
    orders.push({ id: doc.id, ...doc.data() });
  });
  console.log(orders);

  return orders;
};
