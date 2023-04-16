import React from "react";

const AddRestaurant = () => {
  const [toggle, setToggle] = useState(false);
  const {
    getValues,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const Alphabet = /^[a-zA-Z\s]+$/;
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const onSub = (data) => {
    delete data.confirmPassword;
    console.log(data);
  };

  return (
    <div>
      <div className="h-screen bg-gradient-to-br from-pink-300 to-indigo-700 flex justify-center items-center w-full">
        <form onSubmit={handleSubmit(onSub)}>
          <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
            <div className="space-y-4">
              <h1 className="text-center text-2xl font-semibold text-gray-600">
                Register
              </h1>
              <div>
                <label className="block mb-1 text-gray-600 font-semibold">
                  Username
                </label>
                <input
                  {...register("userName", {
                    required: { value: true, message: "user name required..." },
                    maxLength: {
                      value: 20,
                      message: "user name max 20 chars...",
                    },
                    minLength: {
                      value: 2,
                      message: "user name min 2 chars...",
                    },
                    pattern: {
                      value: Alphabet,
                      message: "userName is not alphabet...",
                    },
                  })}
                  type="text"
                  className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                />
                {errors.userName && (
                  <p className=" text-red-500">{errors.userName.message}</p>
                )}
              </div>
              <div>
                <label className="block mb-1 text-gray-600 font-semibold">
                  Email
                </label>
                <input
                  {...register("email", {
                    required: { value: true, message: "email required..." },
                    pattern: {
                      value: regexEmail,
                      message: "The email must contain letters and @...",
                    },
                  })}
                  type="text"
                  className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                />
                {errors.email && (
                  <p className=" text-red-500">{errors.email.message}</p>
                )}
              </div>
              <div>
                <label className="block mb-1 text-gray-600 font-semibold">
                  Password
                </label>
                <input
                  {...register("password", {
                    required: { value: true, message: "password required..." },
                    maxLength: {
                      value: 30,
                      message: "You have reached maximum characters",
                    },
                    minLength: {
                      value: 6,
                      message: "You must have at least 6 characters",
                    },
                  })}
                  type={!toggle ? "password" : "text"}
                  className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                />
                {errors.password && (
                  <p className=" text-red-500">{errors.password.message}</p>
                )}
                <input
                  onClick={() => setToggle(!toggle)}
                  type="radio"
                  className=" checkbox-xs "
                />
                <label className=" pl-1 text-cyan-600 font-bold italic">
                  {!toggle ? "show" : "hide"}
                </label>
              </div>

              <div>
                <label className="block mb-1 text-gray-600 font-semibold">
                  Confirm Password
                </label>
                <input
                  {...register("confirmPassword", {
                    required: {
                      value: true,
                      message: "confirmPassword required...",
                    },
                    validate: {
                      value: (val) =>
                        getValues("password") == val ||
                        "The password does not match",
                    },
                  })}
                  type={!toggle ? "password" : "text"}
                  className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                />
                {errors.confirmPassword && (
                  <p className=" text-red-500">
                    {errors.confirmPassword.message}
                  </p>
                )}
                <input
                  onClick={() => setToggle(!toggle)}
                  type="radio"
                  className=" checkbox-xs "
                />
                <label className=" pl-1 text-cyan-600 font-bold italic">
                  {!toggle ? "show" : "hide"}
                </label>
              </div>
            </div>
            <button className="mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide">
              Register
            </button>
            <button
              onClick={() => reset()}
              className="mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
      ) } export default SignUp
    </div>
  );
};

export default AddRestaurant;
