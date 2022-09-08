import React from "react";

const ContactList = ({ contacts }) => {
  return (
    <div>
      <ul>
        {contacts.length &&
          contacts.map((contact) => (
            <li key={contact.id}>
              {contact.firstName} {contact.lastName}
            </li>
          ))}
      </ul>
    </div>
  );
};

// const Error = ({ error }) => {
//   return error && <div>{error.message}</div>;
// };

export default function UsingAndInJsxDemo() {
  return <ContactList contacts={[]} />;
  //   return <Error />;
}
