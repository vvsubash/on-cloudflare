
  export const onRequest = async (context) => {

    const {request} =context
    
    console.log("hit hello2")
    return new Response(request?.cf?.colo ?? "dfds");
  }
  