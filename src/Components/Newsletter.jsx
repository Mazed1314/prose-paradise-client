import Swal from "sweetalert2";

const Newsletter = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    const Uname = e.target.name.value;
    const email = e.target.email.value;
    if (!Uname || !email) {
      Swal.fire({
        title: "Error!",
        text: "please give your email and name",
        icon: "error",
        confirmButtonText: "ok",
      });
    } else {
      Swal.fire({
        title: "Success!",
        text: "Thank you for subscribing to ournewsletter",
        icon: "success",
        confirmButtonText: "Cool",
      });
      e.target.name.value = null;
      e.target.email.value = null;
    }
  };

  return (
    <div className=" flex flex-col md:flex-row">
      <div className="my-auto w-full">
        <div className="w-8/12 mx-auto">
          <h2 className="text-2xl md:text-4xl font-medium">
            Subscribe to our monthly newsletter
          </h2>
          <p className="py-6 text-gray-500">
            Stay up-to-date about latest tech and new world. Unsubscribe at
            anytime!
          </p>
        </div>
      </div>
      <div className="w-full">
        <form
          onSubmit={handleSubscribe}
          className="mx-auto flex flex-col gap-5 my-10 w-7/12"
        >
          <input
            name="name"
            className="w-full border pl-3 py-2"
            placeholder="full name"
            type="text"
          />
          <input
            name="email"
            className="w-full border pl-3 py-2"
            placeholder="your email address"
            type="text"
          />
          <input
            type="submit"
            value="Subscribe"
            className="w-full text-lg border py-2 rounded-0 text-center hover:bg-black hover:text-white"
          />
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
