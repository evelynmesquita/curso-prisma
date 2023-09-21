import prisma from "./database";

(async () => {
  const students = await prisma.student.groupBy({
    by: [ 'class' ],
    _count: {
      class: true,
    },
  });
  console.log(students);
})

async function countStudentsByClassWithoutJob() {
  const students = await prisma.student.groupBy({
    by: [ 'class' ],
    _count: {
      class: true,
    },
    where: {
      jobId: null,
    },
    orderBy: {
      _count: {
        class: 'desc',
      },
    },
  });

  console.log(students);
}