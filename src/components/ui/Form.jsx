import emailjs from "@emailjs/browser";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) {
      errors.email = "Email is required";

    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email address";
    }
    if (!formData.message) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsSending(true);

      emailjs
        .send(
          "service_fhewhge",
          "template_pflubb8",
          formData,
          "B0S3v8QIebtuhhrrG"
        )
        .then((response) => {
          console.log("SUCCESS...", response);
          toast.success("Message sent!");
          setFormData({ name: "", email: "", message: "" });

        })
        .catch((error) => {
          console.log("FAILED...", error);
          toast.error("Message failed to send. Please try again later");
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  };

  return (
    <>
      <div>
        {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

        <section className="bg-transparent">
          <Toaster />

          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
              <div className="lg:col-span-2 lg:py-12">
                <p className="max-w-xl text-lg">
                  I&apos;m open to feedbacks and any good opportunities where I can implement
                  my skills in the process of making good products
                </p>

                <div className="mt-8">
                  <a className="text-2xl font-bold text-yellow-400">
                    Reach Me Out Here :
                  </a>
                </div>
              </div>

              <div className="rounded-lg p-8 shadow-lg lg:col-span-3 lg:p-12">
                <form onSubmit={handleSubmit} className="space-y-4 z-1">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="sr-only" htmlFor="name">
                        Name
                      </label>
                      <input
                        className="w-full rounded-lg border p-3 text-sm"
                        placeholder="Name"
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      {errors.name && (
                        <p className="text-red-500">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="sr-only" htmlFor="email">
                        Email
                      </label>
                      <input
                        className="w-full rounded-lg border p-3 text-sm"
                        placeholder="Email"
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && (
                        <p className="text-red-500">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="message">
                      Message
                    </label>

                    <textarea
                      className="w-full rounded-lg border p-3 text-sm"
                      placeholder="Message"
                      rows="8"
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                    {errors.message && (
                      <p className="text-red-500">{errors.message}</p>
                    )}
                  </div>

                  <div className="mt-4">
                    <button
                      type="submit"
                      className={`inline-block w-full rounded-lg bg-yellow-400 px-5 py-3 font-medium text-black sm:w-auto hover:bg-yellow-400/80 cursor-pointer
                ${isSending ? "cursor-not-allowed opacity-50" : ""}`}
                      disabled={isSending}
                    >
                      {isSending ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Form;
