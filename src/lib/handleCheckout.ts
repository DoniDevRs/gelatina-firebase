export const handleCheckout = () => {
    // Facebook Pixel
    if (typeof window !== "undefined" && typeof (window as any).fbq === "function") {
      (window as any).fbq("track", "InitiateCheckout");
    }
  
    // UTMify - Verificação mais robusta para garantir que é uma função
    if (typeof window !== "undefined" && typeof (window as any).utmify === "function") {
      (window as any).utmify("track", "InitiateCheckout");
    }
  
    // Redirecionamento
    window.open(
      "https://www.google.com",
      "_blank"
    );
  };
  
  export default handleCheckout;
