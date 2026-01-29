export default {
  async testFunction() {
    try {
      console.log("First Test Service Function Called");
      const date = new Date();
      
      return { date, message: "First Test Service Success" };
    } catch (e) {
      console.log("error in First Test Service:", e);
    }
  },
};
