export enum Status {
  Online = "ONLINE",
  Pending = "PENDING",
  Offline = "OFFLINE",
}

export const STATUS = [
  {
    value: Status.Online,
    label: "Online",
  },
  {
    value: Status.Pending,
    label: "Pending",
  },
  {
    value: Status.Offline,
    label: "Offline",
  },
];

export const findStatusByValue = (status: Status) => {
  return STATUS.find((element) => element.value === status)?.label;
};
