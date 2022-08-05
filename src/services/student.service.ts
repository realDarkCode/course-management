interface Student {
  id: string;
  name: string;
  email: string;
  phone: string;
}
interface StudentViewModel extends Student {}
interface StudentRequestModel {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export const getStudent = (): StudentViewModel[] => {
  return [
    {
      id: "123",
      name: "Valid Name",
      email: "test@example.com",
      phone: "123456789",
    },
  ];
};
