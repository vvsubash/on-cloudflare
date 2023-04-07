
  export const onRequest = async (context) => {

    const {request} = context
    
    return new Response(request?.cf?.colo ?? "dfds");
  }
  