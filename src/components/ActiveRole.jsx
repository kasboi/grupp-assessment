import { useState } from "react";

export function ActiveRole({
  visa,
  radioBox,
  mastercard,
  radioUnchecked,
  avatar_icon,
}) {
  const [selectedCard, setSelectedCard] = useState("super-admin"); // 'visa' or 'mastercard'
  const [cards, setCards] = useState([
    {
      id: "super-admin",
      type: "Super Admin",
      expiry: "06/2024",
    },
    {
      id: "developer-admin",
      type: "Developer Admin",
      expiry: "06/2024",
    },
  ]);

  const handleCardClick = (cardId) => {
    setSelectedCard(cardId);
  };

  const addNewUser = () => {
    const newUserId = `card_${Date.now()}`;
    const newUser = {
      id: newUserId,
      type: "Regular User",
      expiry: "12/2027", // Default future expiry
    };
    setCards([...cards, newUser]);
    setSelectedCard(newUserId); // Automatically select the new card
  };

  return (
    <div className="mb-16 md:flex md:justify-between">
      <div className="mb-6 md:min-w-max md:mr-20">
        <h2 className="text-md font-semibold">Active Role</h2>
        <p className="text-md text-gray-500 mb-4">
          Select active role available to the user.
        </p>
      </div>
      <div className="md:w-full">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`border ${
              selectedCard === card.id
                ? "border-indigo-300 bg-violet-100"
                : "border-gray-300"
            } rounded-xl flex gap-4 sm:gap-8 py-5 px-6 mb-8 items-start cursor-pointer`}
            onClick={() => handleCardClick(card.id)}
          >
            <div className="bg-white rounded-lg px-3 py-2">
              <img src={avatar_icon} alt="user roles" />
            </div>
            <div className="mr-auto ">
              <h4
                className={`font-medium ${
                  selectedCard === card.id ? "text-violet-800" : "text-gray-800"
                }`}
              >
                {card.type}
              </h4>
              <p
                className={`mb-2 ${
                  selectedCard === card.id ? "text-violet-500" : "text-gray-500"
                }`}
              >
                Last Active {card.expiry}
              </p>
              <div className="min-w-max">
                <button
                  className={`mr-6 ${
                    selectedCard === card.id
                      ? "text-violet-500"
                      : "text-gray-600"
                  }`}
                >
                  Set as default
                </button>
                <button
                  className={`font-medium ${
                    selectedCard === card.id
                      ? "text-violet-800"
                      : "text-gray-800"
                  }`}
                >
                  Edit
                </button>
              </div>
            </div>
            <img
              src={selectedCard === card.id ? radioBox : radioUnchecked}
              alt="radio-check"
            />
          </div>
        ))}
        <button
          onClick={addNewUser}
          className="text-gray-500 text-md hover:text-indigo-600 transition-colors cursor-pointer bg-transparent border-none p-0"
        >
          + Add role to user
        </button>
      </div>
    </div>
  );
}
