import { useState } from "react";

function Quiz() {
  const questionBank = [
    {
      question:
        "The Amazon Pink River Dolphin (Boto-cor-de-rosa) has a unique physical ability that other dolphins don't. What is it?",
      options: [
        "It can breathe underwater",
        "It can rotate its neck 180 degrees",
        "it can change its length",
        "It can swim backwards",
      ],
      answer: "It can rotate its neck 180 degrees",
    },

    {
      question:
        "Which massive Amazonian fish is famous for being able to breathe atmospheric air directly from the surface?",
      options: ["Piranha", "Lambari", "Pirarucu", "Pintado"],
      answer: "Pirarucu",
    },

    {
      question:
        "In the famous Lençóis Maranhenses lagoons, how does the local Wolffish (Peixe-niquim/Peixe-lobo) survive when the lagoons completely dry out?",
      options: [
        "It burrows and sleeps in the mud",
        "It grows wings and flies away",
        "It walks to the ocean",
        "It vanishes entirely",
      ],
      answer: "It burrows and sleeps in the mud",
    },

    {
      question:
        "Which majestic marine giants are famous for gathering at the Fernando de Noronha archipelago to feed and interact with divers?",
      options: [
        "Elephant Seals",
        "Manta Rays",
        "Great White Sharks",
        "King Crabs",
      ],
      answer: "Manta Rays",
    },
  ];

  const [optionSelected, setOptionSelected] = useState("None");

  function handleSelectOption(option) {
    setOptionSelected(option);
  }

  return (
    <div>
      <h2>Question 1</h2>
      <p className="question">{questionBank[0].question}</p>

      {questionBank[0].options.map((option) => (
        <button className="option" onClick={() => handleSelectOption()}>
          {" "}
          {option}{" "}
        </button>
      ))}

      <p>Option selected: {handleSelectOption}</p>

      <div className="nav-buttons">
        <button>Previous</button>
        <button>Next</button>
      </div>
    </div>
  );
}

export default Quiz;
